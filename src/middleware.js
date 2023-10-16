export {default} from "next-auth/middleware";

//Las rutas que no se pueden acceder sin cuenta
export const config = {
    matcher: ['/createPost', '/seller']
}