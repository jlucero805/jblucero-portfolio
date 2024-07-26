'use client'

import { PrismaClient } from "@prisma/client";

interface ButtonConfig {
    name: string;
    func: () => Promise<any>;
}

const prisma = new PrismaClient();

const buttons: ButtonConfig[] = [
    {
        name: "FetchJason",
        func: async () => {
            const response = await fetch("http://localhost:3000/api/users/1");
            const json = await response.json();
            console.log(json);
        },
    },
    {
        name: "PostJason",
        func: async () => {
            const response = await fetch("http://localhost:3000/api/users", {
                method: "POST",
                body: JSON.stringify({
                    name: "Jason",
                }),
            });
            if (response.ok) {
                console.log(await response.json());
            } else {
                console.log(response.statusText);
            }
        },
    },
]

export default function Dev() {
    return (
        <div className="flex flex-col space-y-3">
            {
                buttons.map((button: ButtonConfig) => (
                    <button onClick={button.func} className="bg-gray-400 py-5">
                        {button.name}
                    </button>
                ))
            }
        </div>
    )
}
