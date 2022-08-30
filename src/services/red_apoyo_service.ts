import http from "../http-common";
import IRedDeApoyoData from "../types/red_apoyo_data.type"



export async function searchContactById(id: string) {
  let url = 'https://salty-dusk-19882.herokuapp.com/api/v1/redApoyos/' + id + '/'
  let response = await fetch(url, {
    "method": 'GET',
    "headers": {
      "content-Type": 'application/json'
    }
  })
  return await response.json();
}

export async function getId(id: string) {
  //return await http.get<IRedDeApoyoData>(`https://apis-femicides.herokuapp.com/api/v1/redapoyos/${id}`);
  return await http.get<IRedDeApoyoData>(`http://localhost:3000/contactos/${id}`);
}

export async function eliminarContacto (id:string) {
  return await http.delete<IRedDeApoyoData>(`http://localhost:3000/contactos/${id}`);
};







/**
 * let url = process.env.REACT_APP_API  + 'cursos-publicados/' + id + '/'
 * class RedDeApoyoDataService {
  getAll() {
    return http.get<Array<IRedDeApoyoData>>("/red_apoyo");
  }
  get(id: string) {
    return http.get<IRedDeApoyoData>(`/red_apoyo/${id}`);
  }
  create(data: IRedDeApoyoData) {
    return http.post<IRedDeApoyoData>("/red_apoyo", data);
  }
  update(data: IRedDeApoyoData, id: string) {
    return http.put<string>(`/red_apoyo/${id}`, data);
  }
  delete(id: string) {
    return http.delete<string>(`/red_apoyo/${id}`);
  }
  deleteAll() {
    return http.delete<string>(`/red_apoyo`);
  }
  findByTitle(title: string) {
    return http.get<Array<IRedDeApoyoData>>(`/red_apoyo?title=${title}`);
  }
}
export default new RedDeApoyoDataService();
 */
/**
 * axios
    .delete(API_URL + "/" + id)
    .then((response) => {
      if (response.data) {
        setMessage("¡Tu contacto se ha eliminado correctamente!");
        console.log(response.data);
        setIsSent(true);
        history.push("/redDeApoyo");
      }
    })
    .catch((error) => {
      console.log(error.response.data);
    });
 */