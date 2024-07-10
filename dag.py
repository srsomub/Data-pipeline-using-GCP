from airflow import DAG
from datetime import datetime, timedelta
from airflow.operators.bash import BashOperator
default_args = {
    'owner':'airflow',
    'retries':2,
    'retry_delay':timedelta(minutes=5)
}

with DAG(
    default_args=default_args,
    start_date=datetime(2024,1,1),
    schedule_interval='@daily'
) as dag:
    
    task1 = BashOperator(
        task_id = 'running_python',
        bash_command= 'python /home/airflow/gcs/dags/scripts/ETL_gcs.py' 
    )
