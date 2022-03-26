import React, { useEffect, useState } from "react";
import Log from "./Log";
import List from "@mui/material/List";
import axios from "axios";
import TextField from "@mui/material/TextField";

const LogboekList = () => {
  // const tempData = [
  //   {
  //     datum: "Donderdag 24 maart 2022",
  //     toneelmeester: "Roy Schrauwen",
  //     bericht: "Dit is een testbericht",
  //   },
  //   {
  //     datum: "Zondag 20 maart 2022",
  //     toneelmeester: "Paul Uphus",
  //     bericht:
  //       "Bijna foutloze show gehad. Enige puntje is dat marianna tijdens de slangenact haar hand open heeft gehaald aan splinters van de schijf die er niet best aan toe is. Luc heeft dat ook in het showrapport gezet. De naweeën van de kickoff nog extra opgeveegd.. Het was nog best smerig maar er gaat geen dag voorbij dat ik het dweiltje niet vast heb gehad. De liftdeur in de kelder heeft er aan de kelderkant soms wat moeite mee, hij heeft moeite met sluiten. Wilde ik aan Robèèr doorgeven maar die was al vertrokken. Als dat nog niet bekend was kan je daar een storingsmelding van maken Tom? Jeff heeft gevraagd aan Eventslight om de kelder een keer schoon te maken, je snapt het, dan komt dat vanzelf bij ons.. ik heb gezegd dat we dat volgende week doen.",
  //   },
  //   {
  //     datum: "Zondag 6 maart 2022",
  //     toneelmeester: "Roy Schrauwen",
  //     bericht:
  //       "Prima show met een geprinte splittrack-lijst. Er was van te voren een kinderauditie, dus ik heb alleen de toneelvloer kunnen dweilen. Ik heb even een steeksleuteltje gepakt om die grendel van het center-luik een slag te geven. Ik begreep achteraf van Bart dat dat ook op een ToDo-lijst stond, dus dat was mooi meegenomen. Ivo deed de track van Jeffrey. Tijdens de repetities waterscene stapte hij naar achteren terwijl het luik open ging Gelukkig hebben we de monitor dus zag ik het en kon ik het luik nog een klein zetje neer boven proberen te geven. Ivo is ok. Tijdens show zat ik wel met samengeknepen billetjes bij die cue, maar ging helemaal goed. 1 glaciator had moeite tijdens de opstart. De gehuurde. Mark Goossens is beneden gaan kijken. Er was ook wat rook in de kelder. Ik begreep van Mark dat de melders daar niet meegeschakeld worden met de show-stand. Wat te doen als er een melder afgaat? Ik heb beneden in de gang tussen kleedkamer en onder de vloer een klein ledstripje van thuis gelegd. Als die bulleyes het weer doen wil ik hem wel graag terug! Preshow en aanvang ging prima. Opduwen tijdmachine bleven we in de doeken haken. Lijkt geen extra schade te zijn. Bart was er snel om de boel los te krijgen. Geen Cyr-wheel, al bij Company Call besloten. Ik vond de vochtigheid persoonlijk meevallen, maar Gregorzsch (ik vergeet steeds hoe je dat schrijft en ben te lui om het op te zoeken) gaf aan dat hij het te nat vond. Geen skeelers. Tiny fogger en sparklers deden het prima. Als ik het goed begrepen heb gaf Mark bij Bart aan dat er vroeger ook rook in de viool zat ofzo, dus Bart heeft daar iets mee gedaan. Geen idee, ik lag al onder het luik en hij is de TF komen brengen.",
  //   },
  // ];

  const [logboekItems, setLogboekItems] = useState([]);
  const [zoekterm, setZoekterm] = useState("");
  // const [data, setData] = useState(null);

  useEffect(() => {
    showAllLogs();
    // searchLogs("rook");
  }, []);

  useEffect(() => {
    if (zoekterm === "") {
      showAllLogs();
    } else {
      searchLogs(zoekterm);
    }
  }, [zoekterm]);

  const showAllLogs = () => {
    axios("http://192.168.2.4:3002/api/logs").then((response) => {
      setLogboekItems(response.data);
      // console.log(response.data);
    });
  };

  const searchLogs = (query) => {
    const queryString = "http://192.168.2.4:3002/api/logs/zoek/" + query;
    axios(queryString).then((response) => {
      setLogboekItems(response.data);
      console.log(response.data);
    });
  };

  const handleSearchClick = () => {
    console.log("zoek: " + zoekterm);
    if (zoekterm !== "") searchLogs(zoekterm);
  };

  return (
    <>
      <div className="logboek-zoek-container">
        <TextField
          className="zoekInput"
          type="search"
          value={zoekterm}
          onChange={(e) => {
            setZoekterm(e.target.value);
          }}
        ></TextField>
        <button className="zoekKnop" onClick={handleSearchClick}>
          Zoek
        </button>
      </div>
      <nav>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {logboekItems.map(function (itemData, key) {
            return <Log itemData={itemData} key={key} />;
          })}
        </List>
      </nav>
    </>
  );
};

export default LogboekList;
