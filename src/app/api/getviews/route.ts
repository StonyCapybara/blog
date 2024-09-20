import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/mongodb';

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams;
  if (query.get("id")===null) {
    return NextResponse.json({error: "id not provided"}, {status: 400})
  }
  const id = query.get("id")
  try{
    const {vc} = await connectToDatabase();
    const viewDoc = await vc.findOne({id});
    if (viewDoc === null){
      return NextResponse.json({error: "post with id does not exist"}, {status: 400});
    }
    await vc.updateOne({id}, {"$set": {views: viewDoc.views+1}});
    return NextResponse.json({views: viewDoc.views + 1}, {status: 200});
  }
  finally {
  }
  
}
