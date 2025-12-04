export interface Todo {
  id: string;
  user_id?: string | null;
  title: string;
  status: 'pending' | 'progress' | 'done';
  deadline?: string | null;
  created_at: string;
  updated_at: string;
}
