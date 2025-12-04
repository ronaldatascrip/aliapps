import React from 'react';
import { useAppDispatch } from '../../../app/redux/hooks';
import {
  updateTodo,
  toggleStatus,
  deleteTodo,
} from '../store/slices/todoSlice';
import DetailTodoComponent from '../components/DetailTodoComponent';

const DetailTodoContainer = ({ route, navigation }: any) => {
  const dispatch = useAppDispatch();
  const { todo } = route.params;

  return (
    <DetailTodoComponent
      todo={todo}
      onSave={(title, deadline) =>
        dispatch(updateTodo({ id: todo.id, title, deadline }))
      }
      onToggle={() => dispatch(toggleStatus({ id: todo.id }))}
      onDelete={() => {
        dispatch(deleteTodo({ id: todo.id }));
        navigation.goBack();
      }}
      onBack={() => navigation.goBack()}
    />
  );
};

export default DetailTodoContainer;
