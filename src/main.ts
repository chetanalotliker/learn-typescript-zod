import { z } from "zod";

enum Hobbies {
    Programming = 'Programming',
    WeightLifting = "Weight Lifting",
    Guitar = "Guitar"
}

const UserSchema = z.object({
    username: z.string().min(3),
    age: z.number().default(Math.random),
    birthday: z.date().optional(),
    isProgrammer: z.boolean(),
    hobby: z.nativeEnum(Hobbies)
})

type User = z.infer<typeof UserSchema>

const user = {
    username: "WDS",
    age: 20,
    birthday: new Date(),
    isProgrammer: true,
    hobby: Hobbies.Programming
};

console.log(UserSchema.safeParse(user).success)