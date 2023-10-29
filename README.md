# Mobile Security - Take-home DevSecOps

**Which mobile apps were used**

It was used Stream Chat for evaluation, it has tight code and was developed using React Native

**Code:** [Stream Chat React Native](https://github.com/GetStream/stream-chat-react-native)

Although GitHub Actions generates the artifact for installation on the Android emulator, I chose to use another artifact also coming from Strem Chat but focused on Andoid and already populated with information.

**APK:** [Stream Chat Android](https://github.com/GetStream/stream-chat-android)


## SAST

For the SAST analysis I chose to use two tools, SonarQube and CodeQL.

**CodeQL**

As I need to deliver this activity via GitHub and the repository must be public, I chose a tool with native integration and free to use as long as it is in public repositories, CodeQL.
Scanning was configured in the GitHub repository configuration interface.

1 - Settings

2 - Code security and analysis

3- CodeQL analysis > Enable

This way, GitHub creates an exclusive Action for CodeQL analyses, and with each Commit or Pull Request it will be executed, in addition to being configured to perform periodic analyses.

If necessary to direct personalized analysis, the following YAML code must be used:
```
    - name: Initialize CodeQL
      uses: github/codeql-action/init@v2
      with:
        languages: ${{ matrix.language }}
```
Link: [CodeQL](https://codeql.github.com/) 

**SonarQube**

In addition to the SAST analysis carried out by CodeQL, I also decided to implement the SonarQube analysis for SAST and also code quality analysis. The implementation was done as follows:

1 - Using a Docker container, I uploaded an image containing SonarQube.

2 - I created a configuration file in the root of the project (sonar-project.properties)

3- I added the following YAML lines to perform the analysis:

```
      - uses: sonarsource/sonarqube-scan-action@master
        env:
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
          SONAR_HOST_URL: ${{ secrets.SONAR_HOST_URL }}
      - uses: sonarsource/sonarqube-quality-gate-action@master
        timeout-minutes: 5
        env:
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
```

The analysis was also being performed through commits or Pull Requests, but as the SonarQube analysis proceeds the build, I needed to make a few attempts until everything was correct, I decided to switch to manual analysis command: "workflow_dispatch"

Link: [SonarQube](https://hub.docker.com/_/sonarqube)

## DAST

**Owasp Zap**
For the DAST analysis, Owasp Zap was chosen because it is free to use and delivers good results despite sometimes generating false positives.
This way, a real-time scan was carried out by Owasp Zap of the APK running using the Android Studio environment. For that:

1 - I ran an android device using Android Studio

2 - Configure the proxy manually so that Owasp Zap could make the necessary captures, including installing the dynamic certificate provided by Owasp Zap.

3 - And identified possible captures in real time that could be explored in more detail.

Link: [Owasp Zap](https://www.zaproxy.org/)

Problems and observations:
The intention at this point was to perform a real-time Proxy scan of the application, but for some reason I was unsuccessful as the application stopped working when I used the proxy and the Zap certificate.

**qark**

Due to the problems faced with the analysis carried out with Owasp Zap, I decided to use an approach to analyzing the binary itself.
Using LinkedIn's qark I obtained a more complete analysis, for this:

1- Run: pip install qark

2- Run: qark --sdk-path /Users/henriquevieira/Library/Android/sdk --apk /Users/henriquevieira/Downloads/stream-chat-android-ui-components-sample-release/stream-chat-android- ui-components-sample-demo-release.apk

3- Open and analyze the generated file



