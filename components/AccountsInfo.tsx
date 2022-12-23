import { StyleSheet } from 'react-native';
import { AccountName } from './AccountName';
import { Text, View } from './Themed';

type AccountsInfoProps = {
     accounts: {
          type: string;
          balance: number;
     }[];
};

export function AccountsInfo({ accounts }: AccountsInfoProps) {
     return (
          <View style={styles.container}>
               <View style={styles.accounts_container}>
                    <Text style={styles.title}>Account</Text>
                    <Text style={styles.title}>Balance</Text>
               </View>
               {accounts.map((data, index) => {
                    return (
                         <View key={index} style={styles.accounts_container}>
                              <AccountName accountName={data.type} />
                              <Text style={styles.accounts_balance}>$ {data.balance}</Text>
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
     accounts_balance: {
          paddingTop: 10,
          fontSize: 16,
     },
});
