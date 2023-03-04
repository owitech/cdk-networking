import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { VpcStack } from "./network/vpc-stack";
import { TextBucket } from "./buckets/text-bucket";

export class MainStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id);

    const vpcStack = new VpcStack(this, "MyVpcStack");

    const s3Bucket = new TextBucket(this, "MyBucketStack");
  }
}
