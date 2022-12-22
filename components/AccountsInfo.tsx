import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';

type accountsProps = {
     accounts: {
          type: string;
          balance: number;
     }[];
};

export function AccountsInfo({ accounts }: accountsProps) {
     return (
          <View style={styles.container}>
               <View style={styles.accounts_container}>
                    <Text style={styles.title}>Account</Text>
                    <Text style={styles.title}>Balance</Text>
               </View>
               {accounts.map((data, index) => {
                    return (
                         <View key={index} style={styles.accounts_container}>
                              <Text
                                   style={
                                        data.type === 'Checking'
                                             ? {
                                                    ...styles.accounts_text,
                                                    color: '#3d8ed4',
                                               }
                                             : {
                                                    ...styles.accounts_text,
                                                    color: '#3dd456',
                                               }
                                   }
                              >
                                   {data.type}
                              </Text>
                              <Text style={styles.accounts_text}>$ {data.balance}</Text>
                         </View>
                    );
               })}
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          width: '100%',
     },
     accounts_container: {
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
     },
     title: {
          fontSize: 18,
          fontWeight: '500',
     },
     accounts_text: {
          paddingTop: 10,
          fontSize: 16,
     },
});
