import { useMutation, useQuery } from "react-query";
import { TodoService } from "../api/TodoService";
const onDefaultError = (error) => {
    toast.error(error.message);
};

const useListTodo = (onSuccess, onError) => {
    return useQuery(["todo-list"], TodoService.listTodo, {
        onSuccess,
        onError,
    });
};

const useAddTodo = (onSuccess, onError) => {
    return useMutation(TodoService.addTodo, {
        onSuccess,
        onError,
    });
};

const useCategoryList = (onSuccess, onError = onDefaultError) => {
    return useQuery(
        "get-category",
        () => {
            return TodoService.categoryList();
        },
        {
            onSuccess,
            onError,
        }
    );
};

const useDeleteTodo = (onSuccess, onError = onDefaultError) => {
    return useMutation(TodoService.deleteTodo, {
        onSuccess,
        onError,
    });
};

export { useListTodo, useAddTodo, useCategoryList, useDeleteTodo };
