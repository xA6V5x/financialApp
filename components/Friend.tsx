import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';

type friendProps = {
     name: string;
     email: string;
};

export function Friend({ name, email }: friendProps) {
     return (
          <View key={email} style={styles.friend_container}>
               <Text style={styles.name}> {name} </Text>
               <Text style={styles.email}> {email} </Text>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
     },
     scroll: {
          flex: 1,
          backgroundColor: '#ffff',
     },
     content_container: {
          width: '100%',
          alignItems: 'center',
     },
     friend_container: {
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
