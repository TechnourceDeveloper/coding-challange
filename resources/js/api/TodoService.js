import { client } from "../libs/HttpClient";

class TodoService {
    static listTodo(data) {
        return client.get("todo", data);
    }

    static addTodo(data) {
        return client.post("todo", data);
    }

    static categoryList(data) {
        return client.get("category", data);
    }

    static deleteTodo(request) {
        return client.delete(`/todo/${request.id}`, request);
    }
}

export { TodoService };
