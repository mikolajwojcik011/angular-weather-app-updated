import {HttpErrorResponse} from "@angular/common/http";
import {Action, createSelector} from "@ngrx/store";
import {
  CLEAR_WEATHER_DATA_ARRAY,
  ERROR_GET_CITIES,
  ERROR_GET_WEATHER, ErrorGetCities,
  ErrorGetWeather, GET_CITIES,
  GET_WEATHER, SUCCESS_GET_CITIES,
  SUCCESS_GET_WEATHER,
  SuccessGetWeather
} from "../actions/weather.actions";

export class weatherDataStateInterface {
  citiesArray?: {};
  weatherDataArray: Array<{}>;
  weatherDataSuccess: boolean;
  weatherDataLoading: boolean;
  weatherDataError: HttpErrorResponse | null;
  citiesLoading: boolean;
  citiesSuccess: boolean;
  citiesError: HttpErrorResponse | null;
}

const initialState: weatherDataStateInterface = {
  weatherDataLoading: false,
  weatherDataSuccess: false,
  weatherDataError: null,
  citiesLoading: false,
  citiesSuccess: false,
  citiesError: null,
  citiesArray: [],
  weatherDataArray: []
}


export function weatherDataReducer(state: weatherDataStateInterface = initialState, action: Action){
  switch (action.type){
    case GET_WEATHER:
      return{
        ...state,
        weatherDataLoading: true,
      }
    case SUCCESS_GET_WEATHER:
      let arr = state.weatherDataArray.slice()
      arr.push((<SuccessGetWeather>action).payload)
      return{
        ...state,
        weatherDataLoading: false,
        weatherDataSuccess: true,
        weatherDataArray: arr
      }
    case ERROR_GET_WEATHER:
      return {
        ...state,
        weatherDataLoading: false,
        weatherDataError: (<ErrorGetWeather>action).payload
      }
    case GET_CITIES:
      return {
        ...state,
        citiesLoading: true,
      }
    case SUCCESS_GET_CITIES:
      return {
        ...state,
        citiesLoading: false,
        citiesSuccess: true,
        citiesArray: (<SuccessGetWeather>action).payload
      }
    case ERROR_GET_CITIES:
      return {
        ...state,
        citiesLoading: false,
        citiesError: (<ErrorGetCities>action).payload,
      }
    case CLEAR_WEATHER_DATA_ARRAY:
      return{
        ...state,
        weatherDataArray: [],
      }
    default:
      return state;
  }
}

export const weatherState = (state: any) => state.weather;

export const citiesSelector = createSelector(
  weatherState,
  (state: weatherDataStateInterface) => state.citiesArray
)

export const weatherDataSelector = createSelector(
  weatherState,
  (state: weatherDataStateInterface) => state.weatherDataArray
)



export const list = () =>
  [{
    "country": "PL",
    "name": "Żyrzyn",
    "lat": "51.49918",
    "lng": "22.0917"
  },
    {
      "country": "PL",
      "name": "Żyrardów",
      "lat": "52.0488",
      "lng": "20.44599"
    },
    {
      "country": "PL",
      "name": "Żyraków",
      "lat": "50.08545",
      "lng": "21.39622"
    },
    {
      "country": "PL",
      "name": "Zwoleń",
      "lat": "51.35542",
      "lng": "21.58768"
    },
    {
      "country": "PL",
      "name": "Zwierzyniec",
      "lat": "50.614",
      "lng": "22.97512"
    },
    {
      "country": "PL",
      "name": "Żurowa",
      "lat": "49.82636",
      "lng": "21.16894"
    },
    {
      "country": "PL",
      "name": "Żurawiczki",
      "lat": "50.0137",
      "lng": "22.49949"
    },
    {
      "country": "PL",
      "name": "Żurawica",
      "lat": "49.82348",
      "lng": "22.78925"
    },
    {
      "country": "PL",
      "name": "Żołynia",
      "lat": "50.162",
      "lng": "22.30825"
    },
    {
      "country": "PL",
      "name": "Żółkiewka",
      "lat": "50.90991",
      "lng": "22.83465"
    },
    {
      "country": "PL",
      "name": "Żoliborz",
      "lat": "52.26896",
      "lng": "20.98644"
    },
    {
      "country": "PL",
      "name": "Zmiennica",
      "lat": "49.67652",
      "lng": "21.96596"
    },
    {
      "country": "PL",
      "name": "Złota",
      "lat": "50.3816",
      "lng": "20.59361"
    },
    {
      "country": "PL",
      "name": "Złota",
      "lat": "49.88059",
      "lng": "20.69326"
    },
    {
      "country": "PL",
      "name": "Zielonka",
      "lat": "52.30376",
      "lng": "21.16018"
    },
    {
      "country": "PL",
      "name": "Zgłobień",
      "lat": "50.0127",
      "lng": "21.8549"
    },
    {
      "country": "PL",
      "name": "Żelechów",
      "lat": "51.81051",
      "lng": "21.89721"
    },
    {
      "country": "PL",
      "name": "Żelechlinek",
      "lat": "51.71214",
      "lng": "20.0346"
    },
    {
      "country": "PL",
      "name": "Żegocina",
      "lat": "49.81395",
      "lng": "20.41964"
    },
    {
      "country": "PL",
      "name": "Zbuczyn",
      "lat": "52.08974",
      "lng": "22.43829"
    },
    {
      "country": "PL",
      "name": "Zbójna",
      "lat": "53.24293",
      "lng": "21.78812"
    },
    {
      "country": "PL",
      "name": "Zawichost",
      "lat": "50.80743",
      "lng": "21.85408"
    },
    {
      "country": "PL",
      "name": "Zatory",
      "lat": "52.59929",
      "lng": "21.18258"
    },
    {
      "country": "PL",
      "name": "Zarzecze",
      "lat": "50.52767",
      "lng": "22.19522"
    },
    {
      "country": "PL",
      "name": "Zarzecze",
      "lat": "49.98633",
      "lng": "22.53716"
    },
    {
      "country": "PL",
      "name": "Zarszyn",
      "lat": "49.58178",
      "lng": "22.01283"
    },
    {
      "country": "PL",
      "name": "Żarnów",
      "lat": "51.24607",
      "lng": "20.17476"
    },
    {
      "country": "PL",
      "name": "Zamość",
      "lat": "50.72314",
      "lng": "23.25196"
    },
    {
      "country": "PL",
      "name": "Zamch",
      "lat": "50.31713",
      "lng": "23.02786"
    },
    {
      "country": "PL",
      "name": "Zambrów",
      "lat": "52.9855",
      "lng": "22.24319"
    },
    {
      "country": "PL",
      "name": "Załuski",
      "lat": "52.51152",
      "lng": "20.52864"
    },
    {
      "country": "PL",
      "name": "Zaleszany",
      "lat": "50.64799",
      "lng": "21.89069"
    },
    {
      "country": "PL",
      "name": "Zalesie Górne",
      "lat": "52.02768",
      "lng": "21.03659"
    },
    {
      "country": "PL",
      "name": "Zalesie",
      "lat": "52.03743",
      "lng": "23.3636"
    },
    {
      "country": "PL",
      "name": "Zakrzówek",
      "lat": "50.95124",
      "lng": "22.38138"
    },
    {
      "country": "PL",
      "name": "Zakrzew",
      "lat": "51.44095",
      "lng": "21.00105"
    },
    {
      "country": "PL",
      "name": "Zakrzew",
      "lat": "50.89004",
      "lng": "22.59115"
    },
    {
      "country": "PL",
      "name": "Zakroczym",
      "lat": "52.43351",
      "lng": "20.61207"
    },
    {
      "country": "PL",
      "name": "Zaklików",
      "lat": "50.75769",
      "lng": "22.10226"
    },
    {
      "country": "PL",
      "name": "Zakliczyn",
      "lat": "49.85589",
      "lng": "20.80935"
    },
    {
      "country": "PL",
      "name": "Zagórzyce",
      "lat": "50.0169",
      "lng": "21.67517"
    },
    {
      "country": "PL",
      "name": "Zagórz",
      "lat": "49.51457",
      "lng": "22.26706"
    },
    {
      "country": "PL",
      "name": "Zagnańsk",
      "lat": "50.98037",
      "lng": "20.66314"
    },
    {
      "country": "PL",
      "name": "Żabno",
      "lat": "50.13334",
      "lng": "20.88615"
    },
    {
      "country": "PL",
      "name": "Zabłudów",
      "lat": "53.01442",
      "lng": "23.33831"
    },
    {
      "country": "PL",
      "name": "Ząbki",
      "lat": "52.29271",
      "lng": "21.10539"
    },
    {
      "country": "PL",
      "name": "Zabierzów Bocheński",
      "lat": "50.06821",
      "lng": "20.31896"
    },
    {
      "country": "PL",
      "name": "Żabieniec",
      "lat": "52.05856",
      "lng": "21.04817"
    },
    {
      "country": "PL",
      "name": "Żabia Wola",
      "lat": "52.03169",
      "lng": "20.69112"
    },
    {
      "country": "PL",
      "name": "Wyszogród",
      "lat": "52.38988",
      "lng": "20.19081"
    },
    {
      "country": "PL",
      "name": "Wyszków",
      "lat": "52.59278",
      "lng": "21.4584"
    },
    {
      "country": "PL",
      "name": "Wyszki",
      "lat": "52.84129",
      "lng": "22.98119"
    },
    {
      "country": "PL",
      "name": "Wysokie Mazowieckie",
      "lat": "52.91661",
      "lng": "22.51712"
    },
    {
      "country": "PL",
      "name": "Wysokie",
      "lat": "50.91093",
      "lng": "22.666"
    },
    {
      "country": "PL",
      "name": "Wysoka Strzyżowska",
      "lat": "49.83056",
      "lng": "21.74074"
    },
    {
      "country": "PL",
      "name": "Wysoka Głogowska",
      "lat": "50.16019",
      "lng": "22.02124"
    },
    {
      "country": "PL",
      "name": "Wysoka",
      "lat": "50.04474",
      "lng": "22.26002"
    },
    {
      "country": "PL",
      "name": "Wyśmierzyce",
      "lat": "51.62494",
      "lng": "20.81394"
    },
    {
      "country": "PL",
      "name": "Wydminy",
      "lat": "53.98194",
      "lng": "22.03239"
    },
    {
      "country": "PL",
      "name": "Wołomin",
      "lat": "52.34006",
      "lng": "21.24207"
    },
    {
      "country": "PL",
      "name": "Wólka Tanewska",
      "lat": "50.50005",
      "lng": "22.26113"
    },
    {
      "country": "PL",
      "name": "Wólka Podleśna",
      "lat": "50.11785",
      "lng": "22.11213"
    },
    {
      "country": "PL",
      "name": "Wólka Pełkińska",
      "lat": "50.09553",
      "lng": "22.62342"
    },
    {
      "country": "PL",
      "name": "Wólka Niedźwiedzka",
      "lat": "50.24226",
      "lng": "22.18826"
    },
    {
      "country": "PL",
      "name": "Wola Żarczycka",
      "lat": "50.2912",
      "lng": "22.25023"
    },
    {
      "country": "PL",
      "name": "Wola Zabierzowska",
      "lat": "50.07257",
      "lng": "20.33217"
    },
    {
      "country": "PL",
      "name": "Wola Uhruska",
      "lat": "51.32139",
      "lng": "23.62627"
    },
    {
      "country": "PL",
      "name": "Wola Sernicka",
      "lat": "51.44978",
      "lng": "22.68351"
    },
    {
      "country": "PL",
      "name": "Wola Rębkowska",
      "lat": "51.90181",
      "lng": "21.55818"
    },
    {
      "country": "PL",
      "name": "Wolanów",
      "lat": "51.3803",
      "lng": "20.97702"
    },
    {
      "country": "PL",
      "name": "Wola Jachowa",
      "lat": "50.84524",
      "lng": "20.85814"
    },
    {
      "country": "PL",
      "name": "Wola Dębińska",
      "lat": "49.98214",
      "lng": "20.68777"
    },
    {
      "country": "PL",
      "name": "Wola Batorska",
      "lat": "50.05262",
      "lng": "20.26617"
    },
    {
      "country": "PL",
      "name": "Wola",
      "lat": "52.2401",
      "lng": "20.98869"
    },
    {
      "country": "PL",
      "name": "Wojsławice",
      "lat": "50.91916",
      "lng": "23.54602"
    },
    {
      "country": "PL",
      "name": "Wojnicz",
      "lat": "49.958",
      "lng": "20.83785"
    },
    {
      "country": "PL",
      "name": "Wojcieszków",
      "lat": "51.76922",
      "lng": "22.31589"
    },
    {
      "country": "PL",
      "name": "Wojciechowice",
      "lat": "50.84226",
      "lng": "21.58942"
    },
    {
      "country": "PL",
      "name": "Wojciechów",
      "lat": "51.23543",
      "lng": "22.24551"
    },
    {
      "country": "PL",
      "name": "Wojaszówka",
      "lat": "49.77777",
      "lng": "21.67079"
    },
    {
      "country": "PL",
      "name": "Wohyń",
      "lat": "51.75642",
      "lng": "22.78582"
    },
    {
      "country": "PL",
      "name": "Wodzisław",
      "lat": "50.52047",
      "lng": "20.1915"
    },
    {
      "country": "PL",
      "name": "Wodynie",
      "lat": "52.0404",
      "lng": "21.95575"
    },
    {
      "country": "PL",
      "name": "Włodawa",
      "lat": "51.55",
      "lng": "23.55"
    },
    {
      "country": "PL",
      "name": "Włochy",
      "lat": "52.17941",
      "lng": "20.94612"
    },
    {
      "country": "PL",
      "name": "Wizna",
      "lat": "53.19518",
      "lng": "22.38241"
    },
    {
      "country": "PL",
      "name": "Wisznice",
      "lat": "51.78924",
      "lng": "23.20836"
    },
    {
      "country": "PL",
      "name": "Wiśniowa",
      "lat": "49.86897",
      "lng": "21.65508"
    },
    {
      "country": "PL",
      "name": "Wiśniowa",
      "lat": "49.7878",
      "lng": "20.11502"
    },
    {
      "country": "PL",
      "name": "Wiśniew",
      "lat": "52.07265",
      "lng": "22.29392"
    },
    {
      "country": "PL",
      "name": "Wiślica",
      "lat": "50.34891",
      "lng": "20.67438"
    },
    {
      "country": "PL",
      "name": "Wiskitki",
      "lat": "52.08831",
      "lng": "20.38708"
    },
    {
      "country": "PL",
      "name": "Winnica",
      "lat": "52.64306",
      "lng": "20.94114"
    },
    {
      "country": "PL",
      "name": "Wilków",
      "lat": "51.26224",
      "lng": "21.87756"
    },
    {
      "country": "PL",
      "name": "Wilkołaz",
      "lat": "51.01473",
      "lng": "22.35014"
    },
    {
      "country": "PL",
      "name": "Wilga",
      "lat": "51.85211",
      "lng": "21.37751"
    },
    {
      "country": "PL",
      "name": "Wilczyce",
      "lat": "50.74694",
      "lng": "21.65783"
    },
    {
      "country": "PL",
      "name": "Wilanów",
      "lat": "52.16311",
      "lng": "21.08748"
    },
    {
      "country": "PL",
      "name": "Wietrzychowice",
      "lat": "50.19097",
      "lng": "20.76502"
    },
    {
      "country": "PL",
      "name": "Wierzchosławice",
      "lat": "50.02478",
      "lng": "20.85677"
    },
    {
      "country": "PL",
      "name": "Wierzbno",
      "lat": "52.31008",
      "lng": "21.85902"
    },
    {
      "country": "PL",
      "name": "Wierzbna",
      "lat": "50.03311",
      "lng": "22.60128"
    }
  ]

