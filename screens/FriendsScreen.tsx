import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import dataTest from '../dataTest.json';

export default function FriendsScreen({ navigation }: RootTabScreenProps<'Friends'>) {
     const { friends } = dataTest;
     return (
          <SafeAreaView style={styles.container}>
               <ScrollView style={styles.scroll}>
                    <View style={styles.content_container}>
                         {friends.map((data) => {
                              return (
                                   <View key={data.email} style={styles.friend_container}>
                                        <Text style={styles.name}> {data.name} </Text>
                                        <Text style={styles.email}> {data.email} </Text>
                                   </View>
                              );
                         })}
                    </View>
               </ScrollView>
          </SafeAreaView>
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
