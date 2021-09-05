import logo from './logo.svg';
import './App.css';
import Alpaca from "./components/Alpaca";
import {useState} from "react";
import download from "downloadjs";
import {buttonData} from "./data/buttonData";
import AlpacaButton from "./components/AlpacaButton";
import {Box, Container, Grid, Typography, Button} from "@material-ui/core";
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import ShuffleIcon from '@material-ui/icons/Shuffle';

function App() {
    const [button, setButton] = useState(buttonData);
    const [buttonOption, setButtonOption] = useState(
      button.find(m => m.category === "backgrounds")  
    );
    const [category, setCategory] = useState("backgrounds");
    const [categoryOpt, setCategoryOpt] = useState("blue60");
    const [accessories, setAccessories] = useState("glasses");
    const [backgrounds, setBackgrounds] = useState("blue60");
    const [ears, setEars] = useState("tilt-backward");
    const [eyes, setEyes] = useState("default");
    const [hair, setHair] = useState("quiff");
    const [leg, setLeg] = useState("game-console");
    const [mouth, setMouth] = useState("default");
    const [neck, setNeck] = useState("default");
    const [nose, setNose] = useState("nose");
    
  const alpacaAttr = {
      accessories,
      backgrounds,
      ears,
      eyes,
      hair,
      leg,
      mouth,
      neck,
      nose,
  }
  
  const downloadAlpaca = () => {
      const canvas = document.createElement("canvas");
      const width = 720;
      const height = 720;
      
      canvas.width = width;
      canvas.height = height;
      
      const alpacaDrawing = document.getElementById("alpaca").children;
      const canvas2d = canvas.getContext("2d");

      console.log(alpacaDrawing);
      for (let part of alpacaDrawing) {
          console.log(part);
          canvas2d.drawImage(part, 0, 0, width, height);
      }
      
      const drawingFile = canvas.toDataURL("image/png");
      download(drawingFile, "iBenzung-alpaca");
  }
  
  const chgImage = (option, category) => {
      switch (category) {
          case "backgrounds":
              setBackgrounds(option);
              break;
          case "accessories":
              setAccessories(option);
              break;
          case "ears":
              setEars(option);
              break;
          case "eyes":
              setEyes(option);
              break;
          case "hair":
              setHair(option);
              break;
          case "leg":
              setLeg(option);
              break;
          case "mouth":
              setMouth(option);
              break;
          case "neck":
              setNeck(option);
              break;
          case "nose":
              setNose(option);
              break;
      }
      setCategoryOpt(option);
  }
  const randomImage = (data) => {
      data.map((d) => {
          chgImage(randomValue(d.option), d.category);
      });
  }
  const randomValue = (array) => {
      let index = Math.floor(Math.random() * (array.length - 1));
      return array[index];
  }
  
  const showOption = (category) => {
      let opt = button.find(m => m.category === category);
      setButtonOption(opt);
      setCategory(category);
      switch (category) {
          case "backgrounds":
              setCategoryOpt(backgrounds);
              break;
          case "accessories":
              setCategoryOpt(accessories);
              break;
          case "ears":
              setCategoryOpt(ears);
              break;
          case "eyes":
              setCategoryOpt(eyes);
              break;
          case "hair":
              setCategoryOpt(hair);
              break;
          case "leg":
              setCategoryOpt(leg);
              break;
          case "mouth":
              setCategoryOpt(mouth);
              break;
          case "neck":
              setCategoryOpt(neck);
              break;
          case "nose":
              setCategoryOpt(nose);
              break;
      }
  }
    
  return (
      <Container maxWidth={false}>
          <Typography variant="h2">iBz ALPACA IMAGE GENERATOR</Typography>
          <Grid container>
              <Grid item md={4}>
                  <Grid container>
                      <Grid item md={12}>
                          <Alpaca alpacaAttr={alpacaAttr} />
                      </Grid>
                  </Grid>
                  <Grid container>
                      <Grid item md={12}>
                          <Box style={{width: "500px", textAlign: "center", float: "right", marginRight: "25px", marginTop: "15px"}}>
                            <Button variant="contained" color="primary" startIcon={<CloudDownloadIcon />} onClick={() => downloadAlpaca()}>Download</Button>&nbsp;
                            <Button variant="contained" startIcon={<ShuffleIcon />} onClick={() => randomImage(button)}>Random</Button>
                          </Box>    
                      </Grid>
                  </Grid>
              </Grid>
              <Grid item md={4}>
                  <AlpacaButton
                      button={button}
                      buttonOption={buttonOption}
                      showOption={showOption}
                      chgImage={chgImage}
                      category={category}
                      categoryOpt={categoryOpt}
                  />
              </Grid>
          </Grid>
      </Container>
  );
}

export default App;
