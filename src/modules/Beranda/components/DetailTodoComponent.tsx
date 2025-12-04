import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Todo } from '../store/types/Todo';

interface Props {
  todo: Todo;
  onSave: (title: string, deadline?: string | null) => void;
  onToggle: () => void;
  onDelete: () => void;
  onBack: () => void;
}

const DetailTodoComponent: React.FC<Props> = ({
  todo,
  onSave,
  onToggle,
  onDelete,
  onBack,
}) => {
  const [title, setTitle] = useState(todo.title);
  const [deadline, setDeadline] = useState(todo.deadline || '');

  return (
    <View style={{ padding: 20 }}>
      <TouchableOpacity onPress={onBack}>
        <Text style={{ marginBottom: 20 }}>← Kembali</Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Detail Tugas</Text>

      <TextInput
        value={title}
        onChangeText={setTitle}
        style={{ borderWidth: 1, padding: 10, marginVertical: 15 }}
      />

      <TextInput
        value={deadline}
        onChangeText={setDeadline}
        style={{ borderWidth: 1, padding: 10, marginBottom: 15 }}
      />

      <TouchableOpacity onPress={onToggle} style={{ marginBottom: 20 }}>
        <Text>Status: {todo.status}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onSave(title, deadline)}
        style={{
          backgroundColor: '#007bff',
          padding: 12,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: '#fff' }}>Simpan Perubahan</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onDelete} style={{ marginTop: 20 }}>
        <Text style={{ color: 'red' }}>Hapus Tugas</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailTodoComponent;
