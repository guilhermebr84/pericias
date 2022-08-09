import React from "react";
import CarouselComponent from "../../components/CarouselComponent";
import CardComponent from "../../components/CardComponent";
import FooterComponent from "../../components/FooterComponent";
import Background from "../../images/business-people-shaking-hands-in-a-meeting-room.jpg";
import SimpleVector from "../../components/SimpleVector";

import Vector1 from "../../images/Pixel_Working_02.jpg";
import Vector2 from "../../images/Project_70-02.jpg";

export default function Home() {
  return (
    <div
      style={{
        background: `url(${Background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <CarouselComponent />
      <CardComponent
        title={"SOBRE NÓS"}
        text={
          "A Central de Perícias é uma empresa especializada em prestação de serviços de Perícias Trabalhistas Técnicas e Médicas em todo o território nacional. Nossa equipe multidisciplinar com larga experiência em atuação em Perícias Trabalhistas (Periculosidade, Insalubridade e Médica) é formada por especialistas de diversas áreas (médicos, engenheiros e advogados), que atuam em suas áreas específicas de modo a prestar assistência técnica pericial nos temas relativos à saúde e segurança no âmbito trabalhista."
        }
        path='/about'
      />
      <SimpleVector vector={Vector2} />
      <CardComponent
        title={"ASSISTÊNCIA TÉCNICA PARA SUA PERÍCIA"}
        text={
          "Cabe ao Assistente Técnico acompanhar meticulosamente as ações e procedimentos do perito, questionando-o quando for o caso e, ao final, elaborando um Parecer Técnico paralelo a ser anexado aos autos.O Parecer Técnico a ser elaborado pelo Assistente Técnico tem como objetivo fornecer ao Juiz novos elementos, fatos, análises e conclusões que vão se contrapor ao Laudo Pericial elaborado pelo perito nomeado, em especial nas questões controvertidas e de interesse da parte que o contratou O Assistente Técnico também auxilia a parte e seu advogado a elaborar os quesitos a serem respondidos pelo Perito nomeado, bem como apresentar à parte e/ou a seu advogado elementos que possam ser utilizados em seu favor no decorrer da ação, aumentando as chances de êxito na pendência. As etapas são:"
        }
      />
      <SimpleVector vector={Vector1} />

      <FooterComponent />
    </div>
  );
}
