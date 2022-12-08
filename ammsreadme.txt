AMMMS SERVER CHANGES

1.src/main/resources ->application.properties
Give your Database details
spring.datasource.name=amms//databasename
spring.datasource.username=root//username
spring.datasource.password=password//password


2.src/main/java->com.app.Registration.constants->Constants.java
  Give your project Location
      public static String ImageUploadingPath ="C:\\Users\\HP\\Desktop\\Amms\\webamms-server\\Registration\\src\\main\\webapp\\uploads";
	public static String pdfUploadingPath ="C:\\Users\\HP\\Desktop\\Amms\\webamms-server\\Registration\\src\\main\\webapp\\pdf\\";
 