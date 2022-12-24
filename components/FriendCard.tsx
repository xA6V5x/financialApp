import { StyleSheet, Text } from 'react-native';
import { View } from './Themed';

type FriendCardProps = {
     name: string;
     email: string;
};

export function FriendCard({ name, email }: FriendCardProps) {
     return (
          <View key={email} style={styles.container}>
               <Text style={styles.name}> {name} </Text>
               <Text style={styles.email}> {email} </Text>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          margin: 5,
          width: '90%',
          padding: 15,
          borderRadius: 10,
          backgroundColor: '#ECECEC',
     },
     name: {
          fontSize: 16,
          fontWeight: '500',
     },
     email: { paddingLeft: 10, fontSize: 15 },
});
