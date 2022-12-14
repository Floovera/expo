import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';
import tw from 'twrnc';

export function HomeScreen(){
    return(
        <SafeAreaView>
            <View>
                <Text>My favourite places</Text>
            </View>
            <Banner/>
        </SafeAreaView>

    )
}

function Banner(){
    return(
        <View style={styles.banner}>
            <Text style={styles.bannerText}>testtest</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        banner: {
            backgroundColor: "purple",
            padding: 25
        },
        bannerText: {
            color: "white",
            textAlign: "center",
            fontSize: 20
        }


    }
)
