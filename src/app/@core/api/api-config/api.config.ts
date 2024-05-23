import { FEES_API } from "./FEES_API";
import { LOOKUP_API } from "./LOOKUP_API";
import { REQUEST_API } from "./REQUEST_API";
import { TRANS_API } from "./TRANS_API";
import { MOVIE_API } from "./movie-api";
import { REALESTATE_API } from "./realestate-api";

export const API_Config = {
    ...MOVIE_API,
    FEES_API, LOOKUP_API, 
    REQUEST_API, TRANS_API,
    REALESTATE_API
  };
  