import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Login from "../pages/Login";


export const privateRouters = [
  {path: '/about', components: About, exact: true},
  {path: '/posts', components: Posts, exact: true},
  {path: '/posts/:id', components: PostIdPage, exact: true},
]

export const publicRouters = [
  {path: '/login', components: Login, exact: true},
]