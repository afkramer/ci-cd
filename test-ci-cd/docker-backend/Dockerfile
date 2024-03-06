FROM eclipse-temurin:17
COPY ~/target/*.jar test.jar
EXPOSE 8080
ENTRYPOINT [ "java", "-jar", "test.jar" ]