import { Link } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input"

function Login() {
  return(
    <>

      <div className="container">

        <div className="columns-[1rem]">
          <Card>
            <CardHeader>
              <CardTitle>Falta pouco para matar a fome do seu pet!</CardTitle>
              <CardDescription>Como deseja continuar?</CardDescription>
            </CardHeader>
            <CardContent>
              <Input />

              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>



      </div>



      {/*<div className={"container is-fluid"}>*/}
      {/*  <div className="columns has-text-centered">*/}
      {/*    <div className="column is-centered">*/}
      {/*      <img src="/assets/logo.png"*/}
      {/*        className={'logo'} alt="Logo do Au Market"/>*/}

      {/*      <h1 className="slogan">*/}
      {/*                      Falta pouco para matar a fome do seu Pet!</h1>*/}

      {/*      <p className="mb-5">Como deseja continuar?</p>*/}

      {/*      <div className="columns is-mobile">*/}
      {/*        <div className="column">*/}
      {/*          <Link to={'/sign-up-tel'}>*/}
      {/*            <button className="button is-primary-au-market is-fullwidth is-rounded is-outlined">*/}
      {/*              <span className="icon">*/}
      {/*                <i className="fa-solid fa-phone"></i>*/}
      {/*              </span>*/}
      {/*              <span>Telefone</span>*/}
      {/*            </button>*/}
      {/*          </Link>*/}
      {/*        </div>*/}

      {/*        <div className="column">*/}
      {/*          <Link to={'/sign-up-email'}>*/}
      {/*            <button className="button is-primary-au-market is-outlined is-fullwidth is-rounded">*/}
      {/*              <span className="icon">*/}
      {/*                <i className="fa-solid fa-envelope-open"></i>*/}
      {/*              </span>*/}
      {/*              <span>E-mail</span>*/}
      {/*            </button>*/}
      {/*          </Link>*/}
      {/*        </div>*/}
      {/*      </div>*/}

      {/*      <div className="columns">*/}
      {/*        <div className="column">*/}
      {/*          <p>Não possui cadastro?</p>*/}

      {/*          <Link to={'/sign-up'}>*/}
      {/*            <button className="button is-fullwidth is-rounded is-primary-au-market">*/}
      {/*              <span className="icon">*/}
      {/*                <i className="fa-solid fa-right-to-bracket"></i>*/}
      {/*              </span>*/}
      {/*              <span>Cadastre-se</span>*/}
      {/*            </button>*/}
      {/*          </Link>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  )
}

export default Login
