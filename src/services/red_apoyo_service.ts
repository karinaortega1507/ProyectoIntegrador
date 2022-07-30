import http from "../http-common";
import IRedDeApoyoData from "../types/red_apoyo_data.type"

class RedDeApoyoDataService {
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