import { NextResponse } from 'next/server'

type Campaign = {
  id: number;
  title: string;
  description: string;
  goal: number;
  raised: number;
  imageUrl: string;
}

// Mock database
let campaigns: Campaign[] = [
  { id: 1, title: 'Mosque Renovation', description: 'Help us renovate our local mosque', goal: 50000, raised: 10000, imageUrl: '/placeholder.svg?text=Mosque+Renovation' },
  { id: 2, title: 'Islamic School Funding', description: 'Support our new Islamic school project', goal: 100000, raised: 75000, imageUrl: '/placeholder.svg?text=Islamic+School' },
  { id: 3, title: 'Community Center Project', description: 'Building a new community center', goal: 200000, raised: 50000, imageUrl: '/placeholder.svg?text=Community+Center' },
]

export async function GET() {
  return NextResponse.json(campaigns)
}

export async function POST(request: Request) {
  try {
    const body: Omit<Campaign, 'id'> = await request.json()
    
    // Here you would typically validate the data and save to a database
    const newCampaign: Campaign = {
      ...body,
      id: campaigns.length + 1,
      raised: 0,
    }
    
    campaigns.push(newCampaign)

    return NextResponse.json({ message: 'Campaign created successfully', campaign: newCampaign }, { status: 201 })
  } catch (error) {
    console.error('Error creating campaign:', error)
    return NextResponse.json({ message: 'Error creating campaign' }, { status: 500 })
  }
}

