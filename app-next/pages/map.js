
import Navbar from "../components/Navbar";
var renameKeys = require("rename-keys");

import { useMemo, useState, useEffect} from "react";
import { GoogleMap, googleMap, useLoadScript, MarkerF, Circle,  } from "@react-google-maps/api";
import { LoadScriptNext } from "@react-google-maps/api";



const data = {
  name: "Chile",
  regions: [
    {
      name: "Arica y Parinacota",
      romanNumber: "XV",
      number: "15",
      communes: [
        { name: "Arica" },
        { name: "Camarones" },
        { name: "General Lagos" },
        { name: "Putre" },
      ],
    },
    {
      name: "Tarapacá",
      romanNumber: "I",
      number: "1",
      communes: [
        { name: "Alto Hospicio" },
        { name: "Camiña" },
        { name: "Colchane" },
        { name: "Huara" },
        { name: "Iquique" },
        { name: "Pica" },
        { name: "Pozo Almonte" },
      ],
    },
    {
      name: "Antofagasta",
      romanNumber: "II",
      number: "2",
      communes: [
        { name: "Antofagasta" },
        { name: "Calama" },
        { name: "María Elena" },
        { name: "Mejillones" },
        { name: "Ollagüe" },
        { name: "San Pedro de Atacama" },
        { name: "Sierra Gorda" },
        { name: "Taltal" },
        { name: "Tocopilla" },
      ],
    },
    {
      name: "Atacama",
      romanNumber: "III",
      number: "3",
      communes: [
        { name: "Alto del Carmen" },
        { name: "Caldera" },
        { name: "Chañaral" },
        { name: "Copiapó" },
        { name: "Diego de Almagro" },
        { name: "Freirina" },
        { name: "Huasco" },
        { name: "Tierra Amarilla" },
        { name: "Vallenar" },
      ],
    },
    {
      name: "Coquimbo",
      romanNumber: "IV",
      number: "4",
      communes: [
        { name: "Andacollo" },
        { name: "Canela" },
        { name: "Combarbalá" },
        { name: "Coquimbo" },
        { name: "Illapel" },
        { name: "La Higuera" },
        { name: "La Serena" },
        { name: "Los Vilos" },
        { name: "Monte Patria" },
        { name: "Ovalle" },
        { name: "Paiguano" },
        { name: "Punitaqui" },
        { name: "Río Hurtado" },
        { name: "Salamanca" },
        { name: "Vicuña" },
      ],
    },
    {
      name: "Valparaíso",
      romanNumber: "V",
      number: "5",
      communes: [
        { name: "Algarrobo" },
        { name: "Cabildo" },
        { name: "Calera" },
        { name: "Calle Larga" },
        { name: "Cartagena" },
        { name: "Casablanca" },
        { name: "Catemu" },
        { name: "Concón" },
        { name: "El Quisco" },
        { name: "El Tabo" },
        { name: "Hijuelas" },
        { name: "Isla de Pascua" },
        { name: "Juan Fernández" },
        { name: "La Cruz" },
        { name: "La Ligua" },
        { name: "Limache" },
        { name: "Llaillay" },
        { name: "Los Andes" },
        { name: "Nogales" },
        { name: "Olmué" },
        { name: "Panquehue" },
        { name: "Papudo" },
        { name: "Petorca" },
        { name: "Puchuncaví" },
        { name: "Putaendo" },
        { name: "Quillota" },
        { name: "Quilpué" },
        { name: "Quintero" },
        { name: "Rinconada" },
        { name: "San Antonio" },
        { name: "San Esteban" },
        { name: "San Felipe" },
        { name: "Santa María" },
        { name: "Santo Domingo" },
        { name: "Valparaíso" },
        { name: "Villa Alemana" },
        { name: "Viña del Mar" },
        { name: "Zapallar" },
      ],
    },
    {
      name: "Metropolitana de Santiago",
      romanNumber: "XIII",
      number: "13",
      communes: [
        { name: "Alhué" },
        { name: "Buin" },
        { name: "Calera de Tango" },
        { name: "Cerrillos" },
        { name: "Cerro Navia" },
        { name: "Colina" },
        { name: "Conchalí" },
        { name: "Curacaví" },
        { name: "El Bosque" },
        { name: "El Monte" },
        { name: "Estación Central" },
        { name: "Huechuraba" },
        { name: "Independencia" },
        { name: "Isla de Maipo" },
        { name: "La Cisterna" },
        { name: "La Florida" },
        { name: "La Granja" },
        { name: "La Pintana" },
        { name: "La Reina" },
        { name: "Lampa" },
        { name: "Las Condes" },
        { name: "Lo Barnechea" },
        { name: "Lo Espejo" },
        { name: "Lo Prado" },
        { name: "Macul" },
        { name: "Maipú" },
        { name: "María Pinto" },
        { name: "Melipilla" },
        { name: "Ñuñoa" },
        { name: "Padre Hurtado" },
        { name: "Paine" },
        { name: "Pedro Aguirre Cerda" },
        { name: "Peñaflor" },
        { name: "Peñalolén" },
        { name: "Pirque" },
        { name: "Providencia" },
        { name: "Pudahuel" },
        { name: "Puente Alto" },
        { name: "Quilicura" },
        { name: "Quinta Normal" },
        { name: "Recoleta" },
        { name: "Renca" },
        { name: "San Bernardo" },
        { name: "San Joaquín" },
        { name: "San José de Maipo" },
        { name: "San Miguel" },
        { name: "San Pedro" },
        { name: "San Ramón" },
        { name: "Santiago" },
        { name: "Talagante" },
        { name: "Tiltil" },
        { name: "Vitacura" },
      ],
    },
    {
      name: "Libertador Gral. Bernardo O’Higgins",
      romanNumber: "VI",
      number: "6",
      communes: [
        { name: "Chimbarongo" },
        { name: "Chépica" },
        { name: "Codegua" },
        { name: "Coinco" },
        { name: "Coltauco" },
        { name: "Doñihue" },
        { name: "Graneros" },
        { name: "La Estrella" },
        { name: "Las Cabras" },
        { name: "Litueche" },
        { name: "Lolol" },
        { name: "Machalí" },
        { name: "Malloa" },
        { name: "Marchihue" },
        { name: "Nancagua" },
        { name: "Navidad" },
        { name: "Olivar" },
        { name: "Palmilla" },
        { name: "Paredones" },
        { name: "Peralillo" },
        { name: "Peumo" },
        { name: "Pichidegua" },
        { name: "Pichilemu" },
        { name: "Placilla" },
        { name: "Pumanque" },
        { name: "Quinta de Tilcoco" },
        { name: "Rancagua" },
        { name: "Rengo" },
        { name: "Requínoa" },
        { name: "San Fernando" },
        { name: "San Francisco de Mostazal" },
        { name: "San Vicente de Tagua Tagua" },
        { name: "Santa Cruz" },
      ],
    },
    {
      name: "Maule",
      romanNumber: "VII",
      number: "7",
      communes: [
        { name: "Cauquenes" },
        { name: "Chanco" },
        { name: "Colbún" },
        { name: "Constitución" },
        { name: "Curepto" },
        { name: "Curicó" },
        { name: "Empedrado" },
        { name: "Hualañé" },
        { name: "Licantén" },
        { name: "Linares" },
        { name: "Longaví" },
        { name: "Maule" },
        { name: "Molina" },
        { name: "Parral" },
        { name: "Pelarco" },
        { name: "Pelluhue" },
        { name: "Pencahue" },
        { name: "Rauco" },
        { name: "Retiro" },
        { name: "Romeral" },
        { name: "Río Claro" },
        { name: "Sagrada Familia" },
        { name: "San Clemente" },
        { name: "San Javier de Loncomilla" },
        { name: "San Rafael" },
        { name: "Talca" },
        { name: "Teno" },
        { name: "Vichuquén" },
        { name: "Villa Alegre" },
        { name: "Yerbas Buenas" },
      ],
    },
    {
      name: "Ñuble",
      romanNumber: "XVI",
      number: "16",
      communes: [
        { name: "Bulnes" },
        { name: "Chillán Viejo" },
        { name: "Chillán" },
        { name: "Cobquecura" },
        { name: "Coelemu" },
        { name: "Coihueco" },
        { name: "El Carmen" },
        { name: "Ninhue" },
        { name: "Ñiquén" },
        { name: "Pemuco" },
        { name: "Pinto" },
        { name: "Portezuelo" },
        { name: "Quillón" },
        { name: "Quirihue" },
        { name: "Ránquil" },
        { name: "San Carlos" },
        { name: "San Fabián" },
        { name: "San Ignacio" },
        { name: "San Nicolás" },
        { name: "Treguaco" },
        { name: "Yungay" },
      ],
    },
    {
      name: "Biobío",
      romanNumber: "VIII",
      number: "8",
      communes: [
        { name: "Alto Biobío" },
        { name: "Antuco" },
        { name: "Arauco" },
        { name: "Cabrero" },
        { name: "Cañete" },
        { name: "Chiguayante" },
        { name: "Concepción" },
        { name: "Contulmo" },
        { name: "Coronel" },
        { name: "Curanilahue" },
        { name: "Florida" },
        { name: "Hualpén" },
        { name: "Hualqui" },
        { name: "Laja" },
        { name: "Lebu" },
        { name: "Los Álamos" },
        { name: "Los Ángeles" },
        { name: "Lota" },
        { name: "Mulchén" },
        { name: "Nacimiento" },
        { name: "Negrete" },
        { name: "Penco" },
        { name: "Quilaco" },
        { name: "Quilleco" },
        { name: "San Pedro de la Paz" },
        { name: "San Rosendo" },
        { name: "Santa Bárbara" },
        { name: "Santa Juana" },
        { name: "Talcahuano" },
        { name: "Tirúa" },
        { name: "Tomé" },
        { name: "Tucapel" },
        { name: "Yumbel" },
      ],
    },
    {
      name: "Araucanía",
      romanNumber: "IX",
      number: "9",
      communes: [
        { name: "Angol" },
        { name: "Carahue" },
        { name: "Cholchol" },
        { name: "Collipulli" },
        { name: "Cunco" },
        { name: "Curacautín" },
        { name: "Curarrehue" },
        { name: "Ercilla" },
        { name: "Freire" },
        { name: "Galvarino" },
        { name: "Gorbea" },
        { name: "Lautaro" },
        { name: "Loncoche" },
        { name: "Lonquimay" },
        { name: "Los Sauces" },
        { name: "Lumaco" },
        { name: "Melipeuco" },
        { name: "Nueva Imperial" },
        { name: "Padre las Casas" },
        { name: "Perquenco" },
        { name: "Pitrufquén" },
        { name: "Pucón" },
        { name: "Purén" },
        { name: "Renaico" },
        { name: "Saavedra" },
        { name: "Temuco" },
        { name: "Teodoro Schmidt" },
        { name: "Toltén" },
        { name: "Traiguén" },
        { name: "Victoria" },
        { name: "Vilcún" },
        { name: "Villarrica" },
      ],
    },
    {
      name: "Los Ríos",
      romanNumber: "XIV",
      number: "14",
      communes: [
        { name: "Corral" },
        { name: "Futrono" },
        { name: "La Unión" },
        { name: "Lago Ranco" },
        { name: "Lanco" },
        { name: "Los Lagos" },
        { name: "Mariquina" },
        { name: "Máfil" },
        { name: "Paillaco" },
        { name: "Panguipulli" },
        { name: "Río Bueno" },
        { name: "Valdivia" },
      ],
    },
    {
      name: "Los Lagos",
      romanNumber: "X",
      number: "10",
      communes: [
        { name: "Ancud" },
        { name: "Calbuco" },
        { name: "Castro" },
        { name: "Chaitén" },
        { name: "Chonchi" },
        { name: "Cochamó" },
        { name: "Curaco de Vélez" },
        { name: "Dalcahue" },
        { name: "Fresia" },
        { name: "Frutillar" },
        { name: "Futaleufú" },
        { name: "Hualaihué" },
        { name: "Llanquihue" },
        { name: "Los Muermos" },
        { name: "Maullín" },
        { name: "Osorno" },
        { name: "Palena" },
        { name: "Puerto Montt" },
        { name: "Puerto Octay" },
        { name: "Puerto Varas" },
        { name: "Puqueldón" },
        { name: "Purranque" },
        { name: "Puyehue" },
        { name: "Queilén" },
        { name: "Quellón" },
        { name: "Quemchi" },
        { name: "Quinchao" },
        { name: "Río Negro" },
        { name: "San Juan de la Costa" },
        { name: "San Pablo" },
      ],
    },
    {
      name: "Aisén del Gral. Carlos Ibáñez del Campo",
      romanNumber: "XI",
      number: "11",
      communes: [
        { name: "Aisén" },
        { name: "Chile Chico" },
        { name: "Cisnes" },
        { name: "Cochrane" },
        { name: "Coihaique" },
        { name: "Guaitecas" },
        { name: "Lago Verde" },
        { name: "O’Higgins" },
        { name: "Río Ibáñez" },
        { name: "Tortel" },
      ],
    },
    {
      name: "Magallanes y de la Antártica Chilena",
      romanNumber: "XII",
      number: "12",
      communes: [
        { name: "Antártica" },
        { name: "Cabo de Hornos (Ex Navarino)" },
        { name: "Laguna Blanca" },
        { name: "Natales" },
        { name: "Porvenir" },
        { name: "Primavera" },
        { name: "Punta Arenas" },
        { name: "Río Verde" },
        { name: "San Gregorio" },
        { name: "Timaukel" },
        { name: "Torres del Paine" },
      ],
    },
  ],
};



export default function Example() {


  function drawComunes(nameRegion){
    if (nameRegion != null) {
      const a = data.regions.filter((comune) => comune.name == nameRegion)[0];
        return( a.communes.map((e) => {
          return <option value={e.name}>{e.name}</option>;
        }));
     
    }
  };
  

  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  })

  const [selected, setSelected] = useState('Antofagasta');
  const [comuna, setComuna] = useState('')
   
  if(!isLoaded) return "Loading..."
  return (
    <>
      <Navbar />

      <div class="flex flex-row max-w-screen-2xl mx-auto gap-5 pt-10">
        <div class="basis-1/3">
          <div className="relative py-5">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Región
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setSelected(e.target.value)}
            >
              <option value={"Antofagasta"} selected="">
                Elige tu región
              </option>

              {data.regions.map((region) => (
                <option value={region.name}>{region.name}</option>
              ))}
            </select>
          </div>

          {/* Comuna */}
          <div className="relative py-5">
            <label
              for="com"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Comuna
            </label>
            <select
              id="com"
              class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => { setComuna(e.target.value); }}>
              <option selected="">Elige tu comuna</option>
              {drawComunes(selected)}
            </select>
          </div>

          <div className="relative py-5">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Aplicar
            </button>
          </div>
        </div>
        <div class="basis-2/3 bg-black">
          <Map 
            comuna={comuna}
          />
        </div>
      </div>
    </>
  );
}


function Map(props) {
  
  var comuna;

  if (props.comuna != '') {
    comuna = props.comuna;
  }else{
    comuna = "Antofagasta";
  }


  const [location, setLocation] = useState({lat: -33.4372, lng: -71.6506})
  const [markers, setMarkers] = useState([])

  var coordinatesCommune = async function (comune){
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${comuna},Chile&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`)
    const data = await response.json()
    return data
  }

  useEffect(() => {
    coordinatesCommune(comuna).then((data) => {
      setLocation(data.results[0].geometry.location);
    })

    fetch('/api/schoolLocations?comuna='+(comuna.toUpperCase()))
    .then(response => response.json())
    .then(data => {
      setMarkers([])
    
      data.map((school) => {
        //console.log(school);
        if(school.LATITUD == null || school.LONGITUD == null){
          console.log("No hay coordenadas");
        }else{
          var objTemp = {
          lat: parseFloat(school.LATITUD.replace(",", ".")),
          lng: parseFloat(school.LONGITUD.replace(",", ".")),
          }
        setMarkers((markers) => [...markers, objTemp])
        }

        

        
        
      });
    })
  }, [comuna])


  const setupMarkers = () => {
    console.log(markers);
    return markers.map((marker, index) => {
      return (
        <MarkerF
          key={index}
          position={marker}
        />
      )
    })
  }


  return (
    <LoadScriptNext
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
    >
      <GoogleMap
        zoom={14}
        center={location}
        mapContainerClassName="map-container"
      >
        {setupMarkers()}
        {/* <MarkerF position={location} /> */}
      </GoogleMap>
    </LoadScriptNext>
  );
}