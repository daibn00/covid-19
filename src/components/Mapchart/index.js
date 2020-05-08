import React, { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
} from "react-simple-maps";
import { useSelector } from 'react-redux';

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const colorScale = scaleLinear()
  .domain([0.29, 0.68])
  .range(["#ffedea", "#ff5233"]);

const MapChart = ({ setTooltipContent }) => {
  const [data, setData] = useState([]);

  const { countries } = useSelector(state => state);
  useEffect(() => {
    csv("/vulnerability.csv").then(data => {
      setData(data);
    });


  }, []);
  const getGeo =  ( geoData )=>{
    const data =  countries.data.find(country => country.code === geoData.ISO_A2);
    return data ;
  }

  return (
    <ComposableMap  data-tip="" projectionConfig={{ scale: 160 }}
    >
       <Graticule stroke="#654e49" />
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
               const d = data.find(s => s.ISO3 === geo.properties.ISO_A3);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                   fill={d ? colorScale(d["2017"]) : "#F5F4F6"}
                  onMouseEnter={() => {
                    setTooltipContent(getGeo(geo.properties));
                  }}

                  style={{
                    hover: {
                      stroke: "#607D8B",
                      strokeWidth: 1,
                      outline: "none"
                    }
                  }}
                />
              );
            })
          }
        </Geographies>

    </ComposableMap>
  );
};

export default React.memo(MapChart);
