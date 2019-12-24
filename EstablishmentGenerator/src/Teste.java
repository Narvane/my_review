import java.util.Random;

public class Teste {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Random r = new Random();
		Random r2 = new Random();
		
		
		System.out.println(r.nextInt(8000000)+1000000);
		int a = r.nextInt(8000000)+1000000;
		System.out.println(r2.nextInt(8000000)+1000000);
		int b= r2.nextInt(8000000)+1000000;
		
		String total = a +""+ b ;
		System.out.println(total);
	}

}
