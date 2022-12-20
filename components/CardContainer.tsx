import { StyleSheet, View } from 'react-native';

type cardContainerProps = {
     component: JSX.Element;
};

export function CardContainer({ component }: cardContainerProps) {
     return <View style={styles.container}>{component}</View>;
}

const styles = StyleSheet.create({
     container: {
          margin: 5,
          width: '90%',
          padding: 15,
          borderRadius: 10,
          backgroundColor: '#ECECEC',
     },
});
