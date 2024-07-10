# Building a Data Pipeline and Data Analysis project with Google Cloud

In the world of data engineering, the journey from data retrieval to insightful visualization is an adventure filled with challenges and rewards. In this guide, we’ll walk through the intricate steps of constructing a comprehensive Taxi driver data pipeline using Google Cloud services. From retrieving data via the TLC trip API to crafting a dynamic Looker Studio dashboard, each phase contributes to the seamless flow of data for analysis and visualization.

### Architecture

![Architecture](https://github.com/srsomub/Data-pipeline-using-GCP/blob/986dbc7e497135a7f36af9d2381960c388005e35/architecture.jpg)

## Technology Used
- Programming Language - Python
- API - TLC trip record

Google Cloud Platform
1. Airflow on Cloud composer
2. Google Storage
3. Cloud Function
4. Dataflow
5. BigQuery
6. Looker Studio


## Dataset Used
TLC Trip Record Data
Yellow and green taxi trip records include fields capturing pick-up and drop-off dates/times, pick-up and drop-off locations, trip distances, itemized fares, rate types, payment types, and driver-reported passenger counts. 
 

More info about dataset can be found here:
1. Website - https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page
2. Data Dictionary - https://www.nyc.gov/assets/tlc/downloads/pdf/data_dictionary_trip_records_yellow.pdf

## Data Model
<img src="data_model.jpeg">

### Data Retrieval with Python and Cricbuzz API
The foundation of our project begins with Python’s prowess in interfacing with APIs. We’ll delve into the methods of fetching yellow taxi trip data from the NYC API, harnessing the power of Python to gather the required data efficiently.

### Storing Data in Google Cloud Storage (GCS)
Once the data is obtained, our next step involves performing data wrangling and transformation later preserving it in the cloud. We’ll explore how to store this data in a CSV format within Google Cloud Storage (GCS), ensuring accessibility and scalability for future processing.

### Creating a Cloud Function Trigger
With our data safely stored, we proceed to set up a Cloud Function that acts as the catalyst for our pipeline. This function triggers upon file upload to the GCS bucket, serving as the initiator for our subsequent data processing steps.

### Execution of the Cloud Function
Within the Cloud Function, intricate code is crafted to precisely trigger a Dataflow job. We’ll meticulously handle triggers and pass the requisite parameters to seamlessly initiate the Dataflow job, ensuring a smooth flow of data processing.

### Dataflow Job for BigQuery
The core of our pipeline lies in the Dataflow job. Triggered by the Cloud Function, this job orchestrates the transfer of data from the CSV file in GCS to BigQuery. We’ll meticulously configure the job settings to ensure optimal performance and accurate data ingestion into BigQuery.

### Looker Dashboard Creation
The end goal of the project is to build a Looker dashboard, we’ll explore the potential of BigQuery as a data source for Looker Studio. This dashboard will serve as the visualization hub, enabling insightful analysis based on the data loaded from our pipeline.
![Looker](https://lookerstudio.google.com/reporting/a564729f-0553-4b67-8786-c3711500fc90/page/NMtnD)
