import dotenv from 'dotenv-webpack'

export const env = {
    plugins: [
        new dotenv()
    ]
}