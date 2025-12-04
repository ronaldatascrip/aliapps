import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../types/Todo';

interface TodoState {
  list: Todo[];
}

const initialState: TodoState = {
  list: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,

  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{ title: string; deadline?: string | null }>,
    ) => {
      const now = new Date().toISOString();

      state.list.unshift({
        id: Math.random().toString(36).slice(2, 9),
        title: action.payload.title,
        status: 'pending',
        deadline: action.payload.deadline || null,
        created_at: now,
        updated_at: now,
      });
    },

    toggleStatus: (state, action: PayloadAction<{ id: string }>) => {
      const todo = state.list.find(t => t.id === action.payload.id);
      if (!todo) return;

      if (todo.status === 'pending') todo.status = 'progress';
      else if (todo.status === 'progress') todo.status = 'done';
      else todo.status = 'pending';

      todo.updated_at = new Date().toISOString();
    },

    updateTodo: (
      state,
      action: PayloadAction<{
        id: string;
        title?: string;
        deadline?: string | null;
      }>,
    ) => {
      const todo = state.list.find(t => t.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title ?? todo.title;
        todo.deadline = action.payload.deadline ?? todo.deadline;
        todo.updated_at = new Date().toISOString();
      }
    },

    deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
      state.list = state.list.filter(t => t.id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleStatus, updateTodo, deleteTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
