import { StyleSheet, ScrollView } from 'react-native';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import dataTest from '../dataTest.json';
import { FriendCard } from '../components/FriendCard';

export default function FriendsScreen({ navigation }: RootTabScreenProps<'Friends'>) {
     const { friends } = dataTest;
     return (
          <ScrollView style={styles.scroll}>
               <View style={styles.content_container}>
                    {friends.map((data) => {
                         return <FriendCard key={data.email} name={data.name} email={data.email} />;
                    })}
               </View>
          </ScrollView>
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
});
