import opendatasets as od
import pandas as pd
from google.cloud import storage
from transformation import transform


# EXTRACT 
url='https://raw.githubusercontent.com/darshilparmar/uber-etl-pipeline-data-engineering-project/main/data/uber_data.csv'
od.download(url)
file_name = 'uber_data.csv'


# TRANSFORM
dfs, df_names = transform(file_name) 
string_list = df_names.strip('[]').split(', ')
 


# LOAD
storage_client = storage.Client()
for i in range(len(dfs)):
    # bucket_name = f'uber-trip-bucket/{string_list[i]}'

    bucket_name = 'uber-trip-bucket'
    bucket = storage_client.bucket(bucket_name)
    file_name = f'{string_list[i]}.csv'
    dfs[i].to_csv(file_name, index=False) 
    full_blob_name = f"{string_list[i]}/{file_name}"
    blob = bucket.blob(full_blob_name)
    blob.upload_from_filename(file_name)
    print(f"File {file_name} uploaded to GCS bucket {bucket_name}")
  