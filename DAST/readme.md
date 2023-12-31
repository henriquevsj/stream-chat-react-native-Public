# DAST

## Owasp Zap
As said in read.me, the analyzes carried out by Owasp Zap were not successful, as the application did not perform when the device was connected to the Owasp Zap proxy, 
I still uploaded what was captured and the automatic intrusion tests that were carried out, being used:

- [Real-time analysis of the application](https://github.com/henriquevsj/stream-chat-react-native-Public/tree/master/DAST#:~:text=Owasp%20Zap%20Active%20Scan.csv)
- [Active Scan](https://github.com/henriquevsj/stream-chat-react-native-Public/blob/master/DAST/Owasp%20Zap%20Active%20Scan.csv)
- [Ajax Spider](https://github.com/henriquevsj/stream-chat-react-native-Public/blob/master/DAST/Owasp%20Zap%20Ajax.csv)

## qark

- [Scan](https://github.com/henriquevsj/stream-chat-react-native-Public/blob/master/DAST/qark%20Scan.xlsx)

As an alternative to Owasp Zap and its proxy attack, I decided to use an approach to analyze the binary generated by building the pipelines through qark, a tool designed to look for various security-related vulnerabilities in Android applications, whether in the source code or in APKs. packaged.
It focuses on the device's safe environment, without it necessarily having undergone a "root" process.

#### Logs are detected. This may allow potential leakage of information from Android applications. Logs should never be compiled into an application except during development:
- **Severity**: High
- **Attack Scenario**: An attacker can exploit this vulnerability during the development of an Android application. If logs containing sensitive information (such as passwords, tokens, or user data) are logged within the application and those logs are compiled into the production version, an attacker with access to the device can extract this sensitive information from the logs. This may lead to unauthorized data disclosure.
- **Mitigation**: The sensitive logs should never be logged in a production version of the application. Debug and development logs should be disabled and removed from the code before release.

#### Reading files stored on {storage_location} makes it vulnerable to data injection attacks. Note that this code does no error checking and there is no security enforced with these files:
- **Severity**: Medium
- **Attack Scenario**: This vulnerability makes an Android application vulnerable to data injection attacks. If an application reads files stored in a storage location (such as external storage) without performing proper error checks or applying security measures, an attacker with permissions to write to the same storage location can manipulate these files to include malicious code. This can lead to arbitrary code execution or data corruption.
- **Mitigation**: Ehe application should implement proper error checks, verify the integrity of the data being read, and apply security measures such as input validation and encryption when processing the read data. A

####  The Content provider API provides a method call. The framework does no permission checking on this entry into the content provider besides the basic ability for the application to get access to the provider at all:
- **Severity**: High
- **Attack Scenario**: This vulnerability is related to the misuse of the Content Provider API in Android. If an application implements a method in the Content Provider API without performing proper permission checks, an attacker can exploit this flaw to access sensitive information or perform unauthorized actions through the Content Provider. This can allow unauthorized components to interact with the Content Provider, posing a significant risk.
- **Mitigation**: Developers should implement strict permission checks when using the Content Provider API. Any method accessing the Content Provider should check for the necessary permissions to ensure that only authorized applications can interact with it.


### MobSF

The analyzes generated by MobSF can indicate a line of attack for a possible exploitation, without anything being pre-defined. But we can observe from the report a line of reasoning that we can start with:
- Classes
- Hashs
- Files

[Scan](https://github.com/henriquevsj/stream-chat-react-native-Public/blob/master/DAST/Dynamic%20Analysis.pdf)
