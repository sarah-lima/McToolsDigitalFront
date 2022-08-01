import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/button";
import Card from "./components/card";
import Header from "./components/header";
import Input from "./components/input";
import api from "./services/api";

function App() {
  const [res, setRes] = useState([]);
  const [initialDate, setInitialDate] = useState("");
  const [finallyDate, setFinallyDate] = useState("");
  const [fileType, setFileType] = useState("EXCEL");

  useEffect(() => {
      api.get().then(({ data }) => {
        setRes(data.data);
      });
  }, []);

  const submit = ()=>{
    console.log(initialDate)
    console.log(finallyDate)
    console.log(fileType)
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    api.post(`/?init_data=${initialDate}&terminal_data=${finallyDate}&file_type=${fileType}`)
      .then(res=>{
        a.href = res.request.responseURL;
        a.download = res.request.responseURL.substring(res.request.responseURL.lastIndexOf("_")+1);
        a.click();
        window.URL.revokeObjectURL(res.request.responseURL);
      }).catch(error=> console.log('Erro ao fazer download'))
    
  }

  return (
    <>
      <Header />
      <div style={{ marginLeft: "10%", marginTop: "35px", display:'flex', gap: '28px' }}>
        <Input
          onChange={(e) => setInitialDate(e.target.value)}
          placeholder="Insira a data inicial"
        />
        <Input
          onChange={(e) => setFinallyDate(e.target.value)}
          placeholder="Insira a data final"
        />
        <select onChange={(e)=>setFileType(e.target.value)}>
          <option value={'EXCEL'}>
            EXCEL
          </option>
          <option value={'JSON'}>
            JSON
          </option>
        </select>
        <Button onClick={submit} >
          Filtrar
        </Button>
      </div>
      {res.map((item) => {
        return <Card data={item} />;
      })}
    </>
  );
}

export default App;
