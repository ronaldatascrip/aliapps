import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Todo } from '../store/types/Todo';

interface BerandaProps {
  todos: Todo[];
  onAdd: (title: string, deadline?: string | null) => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onOpenDetail: (todo: Todo) => void;
}

const BerandaComponent: React.FC<BerandaProps> = ({
  todos,
  onAdd,
  onToggle,
  onDelete,
  onOpenDetail,
}) => {
  const [text, setText] = useState('');
  const [deadline, setDeadline] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Daftar Tugas</Text>

      {/* Input Tambah */}
      <View style={{ marginTop: 20 }}>
        <TextInput
          placeholder="Judul tugas..."
          value={text}
          onChangeText={setText}
          style={{
            borderWidth: 1,
            borderRadius: 8,
            padding: 10,
            marginBottom: 10,
          }}
        />

        <TextInput
          placeholder="Deadline (opsional)"
          value={deadline}
          onChangeText={setDeadline}
          style={{
            borderWidth: 1,
            borderRadius: 8,
            padding: 10,
          }}
        />

        <TouchableOpacity
          onPress={() => {
            if (text.trim().length > 0) {
              onAdd(text, deadline || null);
              setText('');
              setDeadline('');
            }
          }}
          style={{
            backgroundColor: '#007bff',
            marginTop: 10,
            padding: 12,
            alignItems: 'center',
            borderRadius: 8,
          }}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Tambah</Text>
        </TouchableOpacity>
      </View>

      {/* List Tugas */}
      <FlatList
        data={todos}
        style={{ marginTop: 25 }}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              paddingVertical: 12,
              borderBottomWidth: 1,
              borderColor: '#ddd',
            }}
          >
            <TouchableOpacity onPress={() => onOpenDetail(item)}>
              <Text
                style={{
                  fontSize: 18,
                  textDecorationLine:
                    item.status === 'done' ? 'line-through' : 'none',
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => onToggle(item.id)}>
              <Text style={{ fontSize: 12, color: '#007bff', marginTop: 5 }}>
                Status: {item.status}
              </Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 12, color: '#aaa' }}>
              Dibuat: {item.created_at}
            </Text>

            <TouchableOpacity onPress={() => onDelete(item.id)}>
              <Text style={{ color: 'red', marginTop: 5 }}>Hapus</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default BerandaComponent;
