import { View, Text, TouchableOpacity, Image } from 'react-native'
import { checkImageURL } from '../../../../utils'
import styles from './nearbyjobcard.style'

const NearbyJobCard = ({job, handleNavigate}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleNavigate}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image 
          source={{uri: checkImageURL(job.employer_logo)
          ? job.employer_logo
          : 'https://img.freepik.com/darmowe-wektory/gradientowy-szablon-logo-nerd_23-2149201756.jpg'
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />

      </TouchableOpacity>

      <View>
        <Text style={styles.jobName}  numberOfLines={1}>
          {job.job_title ? job.job_title : "React Developer"}
        </Text>
        <Text style={styles.jobType}>
          {job.job_employment_type ? job.job_employment_type : "Full-time"}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard