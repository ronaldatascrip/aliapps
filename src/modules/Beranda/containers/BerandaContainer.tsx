import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/redux/hooks';
import BerandaComponent from '../components/BerandaComponent';
import { addTodo, toggleStatus, deleteTodo } from '../store/slices/todoSlice';
import Route from '../../../app/routes/Routes';

const BerandaContainer = () => {
  const todos = useAppSelector(state => state.todo.list);
  const dispatch = useAppDispatch();

  return (
    <BerandaComponent
      todos={todos}
      onAdd={(title, deadline) => dispatch(addTodo({ title, deadline }))}
      onToggle={id => dispatch(toggleStatus({ id }))}
      onDelete={id => dispatch(deleteTodo({ id }))}
      onOpenDetail={todo => Route.navigate(Route.DetailTodo, { todo })}
    />
  );
};

export default BerandaContainer;
