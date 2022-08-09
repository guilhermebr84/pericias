import React from "react";
import FormsComponent from "../FormsComponent";
import { BsFacebook, BsTwitter, BsGoogle, BsInstagram } from "react-icons/bs";

export default function App() {
  return (
    <div className='container my-0 mw-100'>
      <footer
        className='text-center text-lg-start text-white'
        style={{ backgroundColor: "#212529" }}
      >
        <div className='container p-4 pb-0 mt-5'>
          <section className=''>
            <div className='row'>
              <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                <h6 className='text-uppercase mb-4 font-weight-bold'>
                  PERÍCIA
                </h6>
                <p>
                  A Central de Perícias é uma empresa especializada em prestação
                  de serviços de Perícias Trabalhistas Técnicas e Médicas em
                  todo o território nacional. Nossa equipe multidisciplinar com
                  larga experiência em atuação em Perícias Trabalhistas
                  (Periculosidade, Insalubridade e Médica) é formada por
                  especialistas de diversas áreas (médicos, engenheiros e
                  advogados), que atuam em suas áreas específicas de modo a
                  prestar assistência técnica pericial nos temas relativos à
                  saúde e segurança no âmbito trabalhista.
                </p>
              </div>

              <hr className='w-100 clearfix d-md-none' />

              <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                <h6 className='text-uppercase mb-4 font-weight-bold'>
                  SOLICITE UM ORÇAMENTO
                </h6>
                <div className='mb-4'>
                  <FormsComponent />
                </div>
              </div>

              <hr className='w-100 clearfix d-md-none' />

              <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mt-3'>
                <h6 className='text-uppercase mb-4 font-weight-bold'>
                  Contato
                </h6>
                <p>
                  <i className='fas fa-home mr-3'></i> New York, NY 10012, US
                </p>
                <p>
                  <i className='fas fa-envelope mr-3'></i> info@gmail.com
                </p>
                <p>
                  <i className='fas fa-phone mr-3'></i> + 01 234 567 88
                </p>
                <p>
                  <i className='fas fa-print mr-3'></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </section>

          <section className='p-3 pt-0'>
            <div className='row d-flex align-items-center'>
              <div className='col-md-7 col-lg-8 text-center text-md-start'>
                <div className='p-3'>© 2020 Copyright:</div>
              </div>

              <div className='col-md-5 col-lg-4 ml-lg-0 text-center text-md-end'>
                <a
                  href='/'
                  className='btn btn-outline-light btn-floating m-1'
                  role='button'
                >
                  <BsFacebook />
                </a>
                <a
                  href='/'
                  className='btn btn-outline-light btn-floating m-1'
                  role='button'
                >
                  <BsTwitter />
                </a>
                <a
                  href='/'
                  className='btn btn-outline-light btn-floating m-1'
                  role='button'
                >
                  <BsGoogle />
                </a>
                <a
                  href='/'
                  className='btn btn-outline-light btn-floating m-1'
                  role='button'
                >
                  <BsInstagram />
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}
