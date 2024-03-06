import { Box, Typography } from "@mui/material";
import Carousel from "./Carousel";
import GradHat from "../GradHat";
import BibleVerse from "../BibleVerse";
import DefaultButton from "../DefaultButton";
import { useRouter } from "next/navigation";

export default function Content() {
  const router = useRouter();

  function handleNavigateToInfo() {
    router.push("/info")
  }

  return (
    <>
      <Box display={"flex"} justifyContent={"center"}>
        <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"} >
          <Typography textAlign="center" className="lg:pt-28 md:pt-24 pt-16 text-3xl sm:w-2/3 lg:w-1/2 w-5/6">
            Bem vindo(a) ao meu site de formatura!
          </Typography>
          <Typography className="pt-14 sm:w-2/3 lg:w-1/2 w-5/6" textAlign="justify">
            Chegou o momento tão esperado que simboliza não apenas o fim de um ciclo, mas também o início de um novo capítulo repleto de esperanças e objetivos ainda mais elevados.
            Foram momentos incontáveis de aprendizado intenso, noites em claro dedicadas ao estudo e ao aprimoramento pessoal, todos marcados por uma jornada de perseverança e superação.
            Sinto-me inundado por uma profunda gratidão a Deus, aos meus familiares, amigos e a cada mentor que cruzou o meu caminho, desempenhando papéis cruciais na minha formação e no meu desenvolvimento. Agora, ao virar desta página tão significativa, é com grande entusiasmo que convido você para celebrar comigo esta conquista.
            Este momento representa mais do que uma vitória pessoal; é a celebração de uma jornada compartilhada com todos que foram essenciais para que este sonho se tornasse realidade.
          </Typography>
          <GradHat />
          <Carousel />
          <BibleVerse>
            &quot;Confie no Senhor
            de todo o seu coração
            e não se apoie
            no seu próprio entendimento.
            Reconheça o Senhor em todos
            os seus caminhos,
            e ele endireitará as suas veredas.&quot;
            <br />
            <br />

            Provérbios 3:5, 6
          </BibleVerse>

        </Box>

      </Box>
      <DefaultButton label="Saiba Mais" onClick={handleNavigateToInfo} />
    </>
  )

}
