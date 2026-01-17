import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const notifications = [
  {
    id: '1',
    type: 'check',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    content: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    time: '20/08/2020, 06:00',
    backgroundColor: '#eef5ff',
  },
  {
    id: '2',
    type: 'user',
    title: 'Bạn có khách hàng mới!',
    content: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    time: '20/08/2020, 06:00',
    backgroundColor: '#eef5ff',
  },
  {
    id: '3',
    type: 'user',
    title: 'Khách hàng được chia sẻ bị trùng',
    content: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống.',
    time: '20/08/2020, 06:00',
    backgroundColor: '#fff',
  },
  {
    id: '4',
    type: 'user',
    title: 'Khách hàng được thêm bị trùng',
    content: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống.',
    time: '20/08/2020, 06:00',
    backgroundColor: '#eef5ff',
  },
  {
    id: '5',
    type: 'check',
    title: 'Công việc sắp đến hạn trong hôm nay',
    content: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
    time: '20/08/2020, 06:00',
    backgroundColor: '#fff',
  },
  {
    id: '6',
    type: 'check',
    title: 'Công việc đã quá hạn',
    content: 'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch.',
    time: '20/08/2020, 06:00',
    backgroundColor: '#fff',
  },
];

export default function App() {
  const renderItem = ({ item }) => (
    <View style={[styles.item, { backgroundColor: item.backgroundColor }]}>
      <View style={styles.icon}>
        <Ionicons
          name={item.type === 'check' ? 'checkmark-circle' : 'person-circle'}
          size={24}
          color="#fff"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.content}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thông báo</Text>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },

  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  item: {
    flexDirection: 'row',
    marginHorizontal: 12,
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
  },

  icon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#3b6fdc',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  content: {
    flex: 1,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 14,
  },

  desc: {
    fontSize: 13,
    marginTop: 4,
  },

  time: {
    fontSize: 12,
    color: '#777',
    marginTop: 6,
  },
}
);