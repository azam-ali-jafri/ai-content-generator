import { checkApiLimit, increaseApiLimit } from "@/lib/apiLimit";
import { checkSubscription } from "@/lib/subscription";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({ auth: process.env.REPLICATE_API_KEY });

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt } = body;

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    if (!prompt) return new NextResponse("prompt is required", { status: 400 });

    const freeTrial = await checkApiLimit();

    if (!freeTrial) return new NextResponse("Free trial has expired", { status: 403 });
    const isPro = await checkSubscription();

    const output = await replicate.run(
      "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
      {
        input: {
          prompt,
        },
      }
    );

    if (!isPro) await increaseApiLimit();

    return NextResponse.json(output);
  } catch (error) {
    console.log("Video error: ", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}