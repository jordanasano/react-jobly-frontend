import axios from "axios";


const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get details on all companies. */
  // returns:
  // companies: [ { handle, name, description, numEmployees, logoUrl }, ...]

  static async getAllCompanies() {
    let res = await this.request(`companies/`);
    return res.companies;
  }

  /** Get details on all companies that have names that match searchTerm. */
  // returns:
  // companies: [ { handle, name, description, numEmployees, logoUrl }, ...]
  static async getCompaniesByName(searchTerm) {
    let res = await this.request(`companies/`, { name: searchTerm });
    return res.companies;
  }

  /** Get details on all jobs */
  // returns:
  // jobs: [ { id, title, salary, equity, companyHandle, companyName }, ...]
  static async getAllJobs() {
    let res = await this.request(`jobs/`);
    return res.jobs;
  }

  /** Get details on all jobs that have names that match searchTerm. */
  // returns:
  // jobs: [ { id, title, salary, equity, companyHandle, companyName }, ...]
  static async getJobsByTitle(searchTerm) {
    let res = await this.request(`jobs/`, { title: searchTerm });
    return res.jobs;
  }

  /** Posts a new user */
  /* returns:
  /* {newUser: { username, firstName, lastName, email, isAdmin },
  /*  newToken: "JWT"} */
  static async signUp(user) {
    const { token } = await this.request(`auth/register`, user, 'post');
    this.token = token;
    return { newUser: user, newToken: token };
  }

  /** Logs in a user */
  /* returns:
  /* {newUser: { username, firstName, lastName, email, isAdmin },
  /* newToken: "JWT"} */
  static async login(userCredentials) {
    const { token } = await this.request(`auth/token`, userCredentials, 'post');
    this.token = token;
    const { user } = await this.request(`users/${userCredentials.username}`);
    return { newUser: user, newToken: token };
  }

  /** Gets an existing user */
  /* returns:
  /* { username, firstName, lastName, isAdmin, jobs } */
  static async getUserByUsername({token, username}) {
    this.token = token;
    const { user } = await this.request(`users/${username}`);
    return user;
  }

}

export default JoblyApi;
