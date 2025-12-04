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

      <FlatList
        data={todos}
        style={{ marginTop: 25 }}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onOpenDetail(item)}>
            <View
              style={{
                paddingVertical: 12,
                borderBottomWidth: 1,
                borderColor: '#ddd',
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  textDecorationLine:
                    item.status === 'done' ? 'line-through' : 'none',
                }}
              >
                {item.title}
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 5,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: 16, color: '#007bff', marginTop: 5 }}>
                  Status: {item.status}
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'green',
                    borderRadius: 5,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => onToggle(item.id)}
                >
                  <Text style={{ color: 'white' }}>Change Status</Text>
                </TouchableOpacity>
              </View>

              <Text style={{ fontSize: 12, color: '#aaa' }}>
                Dibuat: {item.created_at}
              </Text>

              <TouchableOpacity
                style={{
                  width: 100,
                  padding: 5,
                }}
                onPress={() => onDelete(item.id)}
              >
                <Text style={{ color: 'red', marginTop: 5 }}>Hapus</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default BerandaComponent;
