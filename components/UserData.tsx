import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';

type UserDataProps = {
     name: string;
     email: string;
};

export function UserData({ name, email }: UserDataProps) {
     return (
          <View key={email} style={styles.container}>
               <Text style={styles.user_data}> {name} </Text>
               <Text style={styles.user_data}> {email} </Text>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          marginTop: 5,
          marginBottom: 20,
          width: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
     },
     user_data: { fontSize: 20, fontWeight: '500' },
});
