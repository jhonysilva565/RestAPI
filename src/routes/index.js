import bodyParser from "body-parser"
import produtos from "./produtos.js"

const routes = (app) => {
    app.use(
        bodyParser.json(),
        bodyParser.urlencoded({ extended: false })
    )
    app.use('/produtos', produtos)
}

export default routes